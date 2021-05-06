<x-app-layout>
    <x-slot name="header">
        <div class="flex justify-between ">
            <div class="flex">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    {{ __('Cursos') }}
                </h2>
                <div class="ml-10 pt-0.5">
                    <a href="{{ route('courses.create') }}">Añadir nuevo curso</a>
                </div>
            </div>
    </x-slot>

    <div class="py-12">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table class="table-auto min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                                                ID
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                                                Tipo
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                                                Nombre
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                                                Descripción
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                                                Estado
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-black uppercase tracking-wider">
                                                Opciones
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                        @foreach ($dataCourses as $course)
                                        <tr>
                                            <td class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">{{ $course->id }}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $course->type }}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $course->name }}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $course->description }}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $course->state }}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <form action="{{ route('courses.destroy',$course->id) }}" method="POST">   
                                                    <a href="{{ route('courses.show',$course->id) }}" class="text-indigo-600 hover:text-indigo-900">Ver</a>    
                                                    <a href="{{ route('courses.edit',$course->id) }}" class="text-indigo-600 hover:text-indigo-900">Editar</a>   
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger">Eliminar</button>
                                                </form>
                                            </td>
                                        </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                                <div class="mt-4">
                                    {!! $dataCourses->links() !!}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>