<x-app-layout>
    @include('admin.student.header')

    <div class="py-12">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="bg-white p-6 border-b border-gray-200">
                    <div class="p-1">
                        <strong>ID:</strong>
                        {{ $student->id }}
                    </div>
                    <div class="p-1">
                        <strong>DNI:</strong>
                        {{ $student->nif }}
                    </div>
                    <div class="p-1">
                        <strong>Nombre:</strong>
                        {{ $student->name }}
                    </div>
                    <div class="p-1">
                        <strong>Primer Apellido:</strong>
                        {{ $student->last_name1 }}
                    </div>
                    <div class="p-1">
                        <strong>Segundo Apellido:</strong>
                        {{ $student->last_name2 }}
                    </div>
                    <div class="p-1">
                        <strong>Fecha de cumpleaños:</strong>
                        {{ $student->date_birth }}
                    </div>
                    <div class="p-1">
                        <strong>Telefono:</strong>
                        {{ $student->mobile_number }}
                    </div>
                    <div class="p-1">
                        <strong>Foto:</strong>
                        {{ $student->photo_path }}
                    </div>
                    <div class="p-1">
                        <strong>Estado de la Matrícula:</strong>
                        {{ $student->enrolment_status }}
                    </div>
                    <div class="p-1">
                        <strong>Email:</strong>
                        {{ $student->email_personal }}
                    </div>
                    <div class="p-1">
                        <strong>Email de alumno:</strong>
                        {{ $student->email_pedralbes }}
                    </div>

                    {{-- <div class="mt-10">
                        <a class="mt-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" href="{{ route('students.index') }}">Atrás</a>
                    </div> --}}
                </div>
            </div>
        </div>
    </div>
</x-app-layout>