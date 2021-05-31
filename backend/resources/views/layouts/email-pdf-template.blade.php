<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resguardo_Matricula</title>
    <style>
        p{
            margin-top: 5px;
            margin-bottom: 5px;
        }
        #customers {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        #customers td, #customers th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        #customers tr:nth-child(even){background-color: #f2f2f2;}

            #customers th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #439afd;
            color: white;
            }
    </style>
</head>
<body>
    <div>
        <u>
            <h1 style="text-align: center; margin-top:-15px">
                {{ $enrolment["json_course_module_uf"]["course"]["type"] }} - {{ $enrolment["json_course_module_uf"]["course"]["name"] }}
            </h1>
        </u>
        <div>
            <h2 style="margin-bottom:5px">{{ $student->name }} {{ $student->last_name1 }} {{ $student->last_name2 }}</h2>
            <div style="position:relative">
                <div>
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
                </div>
                <div style="position:absolute;left:50%;top:25px">
                    <p>
                        <strong>Email:</strong>
                        {{ $student->email_personal }}
                    </p>
                    <p>
                        <strong>Email de alumno:</strong>
                        {{ $student->email_pedralbes }}
                    </p>
                </div>
            </div>
        </div>
        <hr style="margin:30px auto;width:50%;"/>
        <div style="position:relative">
            @if(count($custodians)>0)
                <div>
                    <p>
                        <strong>{{$custodians[0]->responsible}}: </strong>{{$custodians[0]->name}} {{$custodians[0]->last_name1}}
                    </p>
                    <p>
                        <strong>NIF:</strong>
                        {{$custodians[0]->nif}}
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
                <div style="position:absolute;left:50%;top:0">
                    <p>
                        <strong>{{$custodians[1]->responsible}}: </strong>{{$custodians[1]->name}} {{$custodians[1]->last_name1}}
                    </p>
                    <p>
                        <strong>NIF:</strong>
                        {{$custodians[1]->nif}}
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
        <hr style="margin:30px auto;width:50%;"/>
        <div style="margin-bottom:0">
            <div style="margin-bottom:0">
                <h2 style="margin-top:0">{{ $enrolment["json_course_module_uf"]["course"]["description"] }}</h2>
                <div style="margin-bottom:0">
                    <table id="customers" style="margin-bottom:0">
                        @foreach($enrolment["json_course_module_uf"]["modules"] as $module_name => $ufs)
                        <tr>
                            @if(!empty($ufs))
                            <td style="width:60%">
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
            </div>
        </div>
    </div>
</body>
</html>