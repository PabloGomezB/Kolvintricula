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
                    <div class="grid grid-cols-1 lg:grid-cols-2">
                        <div class="">
                            @include('admin.calendar.fullcalendar')
                        </div>
                        <div class="">
                            <div class="w-full flex items-center justify-center bg-teal-lightest font-sans">
                                <div class="bg-white rounded shadow w-full px-10 pt-4 mx-10 pb-0">
                                    <div class="mb-4 flex justify-between">
                                        <h2 class="text-grey-darkest">Gestor rápido de cursos</h2>
                                        <div style="margin-top: 1.5%">
                                            <label for="toogleDaltonico" class="flex items-center cursor-pointer">
                                                <div class="relative">
                                                    <input id="toogleDaltonico" type="checkbox" class="sr-only" />
                                                    <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner">
                                                    </div>
                                                    <div class="dot absolute w-6 h-6 rounded-full shadow -left-1 -top-1 transition">
                                                    </div>
                                                </div>
                                                <div class="ml-3 text-gray-700">
                                                    Modo daltónicos
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        @foreach($courses as $course)
                                            <div class="flex items-center">
                                                @if($course->state == "MATRICULA")
                                                    <p class="w-full text-grey-darkest pb-0 mb-0"><strong>{{ $course->name }}: </strong>
                                                        <span class="spanGreen text-green-600">Matrícula abierta</span>
                                                        <br>
                                                        <span class="text-sm">{{ $course->description }}</span>
                                                    </p>
                                                    <a href="{{ route('courses.update.state',[$course->id,"DESHABILITADO"]) }}" class="updateCourseState flex-no-shrink px-5 py-1 ml-2 border-2 rounded text-red-600 border-red-700 hover:text-black hover:bg-red-300"
                                                        style="width:30%;text-decoration:none;text-align:center;">
                                                        Cerrar
                                                    </a>
                                                @else
                                                    <p class="w-full text-grey-darkest pb-0 mb-0"><strong>{{ $course->name }}: </strong>
                                                        <span class="spanRed text-red-600">Matrícula cerrada</span>
                                                        <br>
                                                        <span class="text-sm">{{ $course->description }}</span>
                                                    </p>
                                                    <a href="{{ route('courses.update.state',[$course->id,"MATRICULA"]) }}" class="updateCourseState btnAbrir flex-no-shrink px-5 py-1 ml-4 border-2 rounded text-green-600 border-green-700 hover:text-black hover:bg-green-300"
                                                        style="width:30%;text-decoration:none;text-align:center;">
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
        $("#toogleDaltonico").click(function() {
            if($(".btnAbrir").hasClass("text-green-600") && $(".btnAbrir").hasClass("text-green-600")){
                $(".spanGreen").removeClass("text-green-600").addClass("text-yellow-500");
                $(".btnAbrir").removeClass('text-green-600 border-green-700 hover:bg-green-300').addClass('text-yellow-600 border-yellow-400 hover:bg-yellow-300');
            }
            else{
                $(".spanGreen").removeClass("text-yellow-500").addClass("text-green-600");
                $(".btnAbrir").removeClass('text-yellow-600 border-yellow-400 hover:bg-yellow-300').addClass('text-green-600 border-green-700 hover:bg-green-300');
            }
        });

        $(".updateCourseState").click(function() {
            $("body").addClass("wait");
        });
    </script>
</x-app-layout>