<?php use App\Models\Course; ?>
<x-app-layout>
    @include('admin.module.header')

    <div class="py-12">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="bg-white p-6 border-b border-gray-200">
                    <strong>Información:</strong>
                    <div class="p-1">
                        <strong>ID:</strong>
                        {{ $module->id }}
                    </div>
                    <div class="p-1">
                        <strong>Curso:</strong>
                        <?php                                                         
                            $course = Course::find($module->id_course); 
                            echo "$course->name"; 
                        ?>
                    </div>
                    <div class="p-1">
                        <strong>Nombre:</strong>
                        {{ $module->name }}
                    </div>
                    <div class="p-1">
                        <strong>Descropcion:</strong>
                        {{ $module->description }}
                    </div>
                    
                    {{-- <div class="mt-10">
                        <a class="mt-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" href="{{ route('courses.index') }}">Atrás</a>
                    </div> --}}
                </div>
            </div>
        </div>
    </div>
</x-app-layout>