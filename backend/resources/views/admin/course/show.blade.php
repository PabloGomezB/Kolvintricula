<?php use App\Models\Course; ?>
<x-app-layout>
    @include('admin.course.header')

    <div class="py-12">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
            <h1>Información del curso:</h1>
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="bg-white p-6 border-b border-gray-200">
                    <div class="p-1">
                        <strong>ID:</strong>
                        {{ $course->id }}
                    </div>
                    <div class="p-1">
                        <strong>Tipo:</strong>
                        {{ $course->type }}
                    </div>
                    <div class="p-1">
                        <strong>Nombre:</strong>
                        {{ $course->name }}
                    </div>
                    <div class="p-1">
                        <strong>Descripción:</strong>
                        {{ $course->description }}
                    </div>
                    <div class="p-1">
                        <strong>Estado:</strong>
                        {{ $course->state }}
                    </div>
                    {{-- <div class="mt-10">
                        <a class="mt-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" href="{{ route('courses.index') }}">Atrás</a>
                    </div> --}}
                </div>
            </div>
            <h1>Modulos que incluye:</h1>

            <table id="table" class="table-auto min-w-full divide-y divide-gray-200" width="100%">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" data-priority="1" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                            ID
                        </th>
                        <th scope="col" data-priority="3" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                            Nombre
                        </th>
                        <th scope="col" data-priority="4" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                            Descripción
                        </th>                                            
                        <th scope="col" data-priority="6" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                            Opciones
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <?php $modules = DB::table('modules')->where('id_course','=',$course->id)->get();  ?>         
                    @if ($modules->count() == 0)                    
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Actualmente este curso no tiene ningún modulo asignado.</td>                    
                    @endif                                    
                    @foreach ($modules as $module)
                    <tr class="hover:bg-blue-100 clickable-row" data-href='{{ route('modules.show',$module->id) }}'>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $module->id }}</td>               
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $module->name }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $module->description }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                            <form class="" action="{{ route('modules.destroy',$module->id) }}" method="POST">      
                                <a href="{{ route('modules.edit',$module->id) }}" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Editar</a>   
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Eliminar</button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>    
        </div>
    </div>
</x-app-layout>