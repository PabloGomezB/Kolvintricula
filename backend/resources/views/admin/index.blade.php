<?php
use App\Models\Course;
$courses = Course::all();
?>
<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('INS PEDRALBES') }}
        </h2>
    </x-slot>
    <div class="py-6 ">
        <div class="max-w-10xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="flex justify-between">
                        <div class="w-50">
                            @include('admin.calendar.fullcalendar')
                        </div>
                        <div class="w-50">
                            <div class="w-full flex items-center justify-center bg-teal-lightest font-sans">
                                <div class="bg-white rounded shadow w-full px-10 pt-4 mx-10 pb-0">
                                    <div class="mb-4">
                                        <h2 class="text-grey-darkest">Gestor rápido de cursos</h2>
                                    </div>
                                    <div>
                                        @foreach($courses as $course)
                                            <div class="flex items-center">
                                                @if($course->state == "MATRICULA")
                                                    <p class="w-full text-grey-darkest pb-0 mb-0"><strong>{{ $course->name }}: </strong>
                                                        <span class="text-green-500">Matrícula abierta</span>
                                                        <br>
                                                        <span class="text-sm">{{ $course->description }}</span>
                                                    </p>
                                                    <a href="{{ route('courses.update.state',[$course->id,"DESHABILITADO"]) }}" class="updateCourseState flex-no-shrink px-5 py-1 ml-2 border-2 rounded text-red-600 border-red-700 hover:text-black hover:bg-red-300"
                                                        style="width:30%;text-decoration:none;">
                                                        Cerrar
                                                    </a>
                                                @else
                                                    <p class="w-full text-grey-darkest pb-0 mb-0"><strong>{{ $course->name }}: </strong>
                                                        <span class="text-red-600">Matrícula cerrada</span>
                                                        <br>
                                                        <span class="text-sm">{{ $course->description }}</span>
                                                    </p>
                                                    <a href="{{ route('courses.update.state',[$course->id,"MATRICULA"]) }}" class="updateCourseState flex-no-shrink px-5 py-1 ml-4 border-2 rounded text-green-600 border-green-700 hover:text-black hover:bg-green-300"
                                                        style="width:30%;text-decoration:none;">
                                                        Abrir
                                                    </a>
                                                @endif
                                            </div>
                                            <hr class="my-3">
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(".updateCourseState").click(function() {
            $("body").addClass("wait");
        });
    </script>
</x-app-layout>