{{-- <link href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.min.css" rel="stylesheet">
<link href="https://cdn.datatables.net/1.10.24/css/dataTables.foundation.min.css" rel="stylesheet">
<link href="https://cdn.datatables.net/responsive/2.2.7/css/responsive.dataTables.min.css" rel="stylesheet"> --}}

<?php use App\Models\Course; ?>
<x-app-layout>
    @include('admin.module.header')

    <div class="py-12">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="bg-white p-6 border-b border-gray-200">
                    <x-validation-errors />
                    <x-success-message />
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table id="table" class="table-auto min-w-full divide-y divide-gray-200" width="100%">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col" data-priority="1" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                                                    ID
                                                </th>
                                                <th scope="col" data-priority="2" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                                                    Curso
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
                                            @foreach ($dataModules as $module)
                                            <tr class="hover:bg-blue-100 clickable-row" data-href='{{ route('modules.show',$module->id) }}'>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $module->id }}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">  
                                                    <?php                                                         
                                                        $course = Course::find($module->id_course); 
                                                        echo "$course->name"; 
                                                    ?>
                                                </td>
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
                                <div class="mt-4">
                                    {!! $dataModules->links() !!}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
<!--Datatables -->
{{-- <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.24/js/dataTables.foundation.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.7/js/dataTables.responsive.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.7/js/responsive.foundation.min.js"></script> --}}

<script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
<script>
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
    let table = $('#table')
    .DataTable({
        paging: false,
        info: false,
    })
</script>
