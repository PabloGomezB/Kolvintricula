<?php

use App\Models\Course; ?>
<x-app-layout>
    @include('admin.custodian.header')

    <div class="py-12">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
            <h1>Información de la autorización legal:</h1>
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="bg-white p-6 border-b border-gray-200">
                    <div class="p-1">
                        <strong>ID:</strong>
                        {{ $custodian->id }}
                    </div>
                    <div class="p-1">
                        <strong>ID Estudiante:</strong>
                        {{ $custodian->id_student }}
                    </div>
                    <div class="p-1">
                        <strong>Tipo:</strong>
                        {{ $custodian->reponsible }}
                    </div>
                    <div class="p-1">
                        <strong>DNI /NIE:</strong>
                        {{ $custodian->nif }}
                    </div>
                    <div class="p-1">
                        <strong>Nombre:</strong>
                        {{ $custodian->name }}
                    </div>
                    <div class="p-1">
                        <strong>Primer Apellido:</strong>
                        {{ $custodian->last_name1 }}
                    </div>
                    <div class="p-1">
                        <strong>Segundo Apellido:</strong>
                        {{ $custodian->last_name2 }}
                    </div>
                    <div class="p-1">
                        <strong>Teléfono:</strong>
                        {{ $custodian->mobile_number }}
                    </div>
                    <div class="p-1">
                        <strong>Email del responsable legal:</strong>
                        {{ $custodian->email }}
                    </div>

                    {{-- <div class="mt-10">
                        <a class="mt-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" href="{{ route('courses.index') }}">Atrás</a>
                </div> --}}
            </div>
        </div>
    </div>
    </div>
</x-app-layout>