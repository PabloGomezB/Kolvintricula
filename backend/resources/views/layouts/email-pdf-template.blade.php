<div>
    <div>
        <h2>Datos del alumno</h2>
        <p>
            <strong>{{ $student->name }} {{ $student->last_name1 }} {{ $student->last_name2 }}</strong>
        </p>
        <p>
            <strong>DNI:</strong>
            {{ $student->nif }}
        </p>
        <p>
            <strong>Fecha de nacimiento::</strong>
            {{ $student->date_birth }}
        </p>
        <p>
            <strong>Teléfono:</strong>
            {{ $student->mobile_number }}
        </p>
        <p>
            <strong>Email:</strong>
            {{ $student->email_personal }}
        </p>
        <p>
            <strong>Email de alumno:</strong>
            {{ $student->email_pedralbes }}
        </p>
    </div>
    
    <hr/>

    <div style="position:relative">
        @if(count($custodians)>0)
            <div>
                <h2>Datos de los responsables</h2>
                <p>
                    <strong>Responsable:</strong>
                    {{$custodians[0]->responsible}}
                </p>
                <p>
                    <strong>NIF:</strong>
                    {{$custodians[0]->nif}}
                </p>
                <p>
                    <strong>Nombre:</strong>
                    {{$custodians[0]->name}}
                </p>
                <p>
                    <strong>Primer Apellido:</strong>
                    {{$custodians[0]->last_name1}}
                </p>
                <p>
                    <strong>Teléfono:</strong>
                    {{$custodians[0]->mobile_number}}
                </p>
                <p>
                    <strong>Email:</strong>
                    {{$custodians[0]->email}}
                </p>
            </div>
            @if(count($custodians) > 1)
            <div style="position:absolute;left:50%;top:7%">
                <p>
                    <strong>Responsable:</strong>
                    {{$custodians[1]->responsible}}
                </p>
                <p>
                    <strong>NIF:</strong>
                    {{$custodians[1]->nif}}
                </p>
                <p>
                    <strong>Nombre:</strong>
                    {{$custodians[1]->name}}
                </p>
                <p>
                    <strong>Primer Apellido:</strong>
                    {{$custodians[1]->last_name1}}
                </p>
                <p>
                    <strong>Teléfono:</strong>
                    {{$custodians[1]->mobile_number}}
                </p>
                <p>
                    <strong>Email:</strong>
                    {{$custodians[1]->email}}
                </p>
            </div>
            @endif
        @endif
    </div>

    <hr/>

    <div>
        <div>
            <h2>Datos de la matrícula</h2>
            <p>
                <strong>Tipo de estudios: </strong>{{ $enrolment["json_course_module_uf"]["course"]["type"] }}
                <br/>
                <strong>Curso: </strong>{{ $enrolment["json_course_module_uf"]["course"]["name"] }} - {{ $enrolment["json_course_module_uf"]["course"]["description"] }}
            </p>
            <div>
                @foreach($enrolment["json_course_module_uf"]["modules"] as $module_name => $ufs)
                    @if(!empty($ufs))
                        <strong>{{$module_name}}:</strong>
                        @php
                            $numUfs = count($ufs);
                            $i=0;
                        @endphp
                        @foreach($ufs as $key => $uf_name)
                            @if(++$i === $numUfs)
                                {{$uf_name}}
                            @else
                                {{$uf_name}},
                            @endif
                        @endforeach
                        <br />
                    @endif
                @endforeach
            </div>
        </div>
    </div>
</div>
