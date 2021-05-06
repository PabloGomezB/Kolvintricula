<x-app-layout>
    @include('admin.course.header')

    <div class="py-12">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
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
        </div>
    </div>
</x-app-layout>