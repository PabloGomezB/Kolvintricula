<?php 
    use App\Models\Course;
    use App\Models\UF;
 ?>
<x-app-layout>
    @include('admin.module.header')
    
    <div class="py-12">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
            <h1>Información del modulo:</h1>
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
                        <strong>Descripcion:</strong>
                        {{ $module->description }}
                    </div>
                    
                    {{-- <div class="mt-10">
                        <a class="mt-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" href="{{ route('courses.index') }}">Atrás</a>
                    </div> --}}
                </div>
            </div>
            <br>
            <h1>UFS que incluye el modulo:</h1>
            <br>
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
                        <th scope="col" data-priority="4" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                            Año
                        </th>
                        <th scope="col" data-priority="4" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                            Horas
                        </th>                                           
                        <th scope="col" data-priority="6" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                            Opciones
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <?php $ufs = DB::table('u_f_s')->where('id_module','=',$module->id)->get();  ?>         
                    @if ($ufs->count() == 0)        
                        <tr>            
                            <td colspan='6' class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">Actualmente este modulo no tiene ningúna UF asignada.</td>                    
                        </tr>
                    @endif                                    
                    @foreach ($ufs as $uf)
                    <tr class="hover:bg-blue-100 ">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $uf->id }}</td>               
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $uf->name }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $uf->description }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $uf->year }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $uf->hours }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                            <form class="" action="{{ route('ufs.destroy',$uf->id) }}" method="POST">      
                                <a href="{{ route('ufs.edit',$uf->id) }}" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Editar</a>   
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
<script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
<script>
$(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
    let table = $('#table')
    .DataTable({
        order: [],
        paging: false,
        info: false,
    })
</script>