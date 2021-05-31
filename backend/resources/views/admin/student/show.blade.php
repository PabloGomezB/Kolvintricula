<x-app-layout>
    @include('admin.student.header')

    <div class="py-12">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="bg-white p-6 border-b border-gray-200">

                    <h2 class="mb-5">Datos del alumno</h2>
                    <div class="flex justify-between">
                        <div class="lg:max-w-full lg:flex">
                            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                                <img src="{{ URL::to('/') }}/uploads/{{ $student->photo_path }}" class=""/>
                            </div>
                            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div class="mb-8">
                                    <div class="text-gray-900 font-bold text-xl mb-2">
                                        {{ $student->name }} {{ $student->last_name1 }} {{ $student->last_name2 }}
                                    </div>
                                    <div class="text-gray-700 text-base">
                                        <div class="grid grid-cols-2 gap-0">
                                            <div class="grid grid-rows gap-3">
                                                <div class="p-1">
                                                    <strong>ID:</strong>
                                                    {{ $student->id }}
                                                </div>
                                                <div class="p-1">
                                                    <strong>DNI:</strong>
                                                    {{ $student->nif }}
                                                </div>
                                                <div class="p-1">
                                                    <strong>Fecha de nacimiento:</strong>
                                                    {{ $student->date_birth }}
                                                </div>
                                                <div class="p-1">
                                                    <strong>Teléfono:</strong>
                                                    {{ $student->mobile_number }}
                                                </div>
                                            </div>

                                            <div class="grid grid-rows gap-3">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-100">
                            <div class="grid grid-cols-2 gap-20">
                                @if(count($custodians)>0)
                                    <h2 class="absolute" style="margin-top:-55px">Datos de los responsables</h2>
                                    <div class="grid grid-rows gap-1">
                                        <div class="p-1">
                                            <strong>Responsable:</strong>
                                            {{$custodians[0]->responsible}}
                                        </div>
                                        <div class="p-1">
                                            <strong>NIF:</strong>
                                            {{$custodians[0]->nif}}
                                        </div>
                                        <div class="p-1">
                                            <strong>Nombre:</strong>
                                            {{$custodians[0]->name}}
                                        </div>
                                        <div class="p-1">
                                            <strong>Primer Apellido:</strong>
                                            {{$custodians[0]->last_name1}}
                                        </div>
                                        <div class="p-1">
                                            <strong>Teléfono:</strong>
                                            {{$custodians[0]->mobile_number}}
                                        </div>
                                        <div class="p-1">
                                            <strong>Email:</strong>
                                            {{$custodians[0]->email}}
                                        </div>
                                    </div>
                                    @if(count($custodians) > 1)
                                    <div class="grid grid-rows gap-1">
                                        <div class="p-1">
                                            <strong>Responsable:</strong>
                                            {{$custodians[1]->responsible}}
                                        </div>
                                        <div class="p-1">
                                            <strong>NIF:</strong>
                                            {{$custodians[1]->nif}}
                                        </div>
                                        <div class="p-1">
                                            <strong>Nombre:</strong>
                                            {{$custodians[1]->name}}
                                        </div>
                                        <div class="p-1">
                                            <strong>Primer Apellido:</strong>
                                            {{$custodians[1]->last_name1}}
                                        </div>
                                        <div class="p-1">
                                            <strong>Teléfono:</strong>
                                            {{$custodians[1]->mobile_number}}
                                        </div>
                                        <div class="p-1">
                                            <strong>Email:</strong>
                                            {{$custodians[1]->email}}
                                        </div>
                                    </div>
                                    @endif
                                @endif
                            </div>
                        </div>
                    </div>

                    <hr class="m-10" />

                    <div class="mb-20">
                        <h2 class="mb-5">Datos de la matrícula</h2>
                        <p class="mb-3">
                            <strong>Tipo de estudios: </strong>{{ $enrolment["json_course_module_uf"]["course"]["type"] }}
                            <br/>
                            <strong>Curso: </strong>{{ $enrolment["json_course_module_uf"]["course"]["name"] }} - {{ $enrolment["json_course_module_uf"]["course"]["description"] }}
                        </p>
                        <div>
                            <table id="customers" style="margin-bottom:0">
                            <tr></tr>
                                @foreach($enrolment["json_course_module_uf"]["modules"] as $module_name => $ufs)
                                <tr>
                                    @if(!empty($ufs))
                                    <td class="p-5" style="width:60%">
                                        {{$module_name}}
                                    </td>
                                        @php
                                            $numUfs = count($ufs);
                                            $i=0;
                                        @endphp
                                        <td>
                                        @foreach($ufs as $key => $uf_name)
                                            @if(++$i === $numUfs)
                                                {{$uf_name}}
                                            @else
                                                {{$uf_name}},
                                            @endif
                                        @endforeach
                                        </td>
                                    @endif
                                </tr>
                                @endforeach
                            </table>
                        </div>
                    <div class="mt-10">
                        <a class="mt-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            href="{{ route('students.index') }}">Atrás</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
