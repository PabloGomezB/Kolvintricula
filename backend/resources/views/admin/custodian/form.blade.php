<?php
use App\Models\Student;
?>
<div class="grid grid-cols-2 gap-6">
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label class="required" for="id_student" :value="__('Alumno a cargo')" />
            <select id="type" name="id_student" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <?php
                $students = Student::all();
                foreach ($students as $student) {
                    if ($student->id == $custodian->id_student) {
                        echo "<option selected value='$student->id'>$student->name $student->last_name1 $student->last_name2</option>";
                    } else {
                        echo "<option value='$student->id'>$student->name $student->last_name1 $student->last_name2</option>";
                    }
                }
                ?>
            </select>
        </div>
        <div>
            <x-label class="required" for="nif" :value="__('DNI')" />
            <x-input id="nif" type="text" name="nif" placeholder="" value="{{ $custodian->nif }}" class="block mt-1 w-full" autofocus />

        </div>
        <div>
            <x-label class="required" for="last_name1" :value="__('Primer apellido')" />
            <x-input id="last_name1" type="text" name="last_name1" placeholder="" value="{{ $custodian->last_name1 }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label class="required" for="responsible" :value="__('Tipo de responsable')" />
            <div class="inline-block relative w-full">
                <select id="responsible" name="responsible" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="PADRE" <?php if ($custodian->type == "PADRE") { ?> selected <?php } ?>>PADRE</option>
                    <option value="MADRE" <?php if ($custodian->type == "MADRE") { ?> selected <?php } ?>>MADRE</option>
                    <option value="TUTOR" <?php if ($custodian->type == "TUTOR") { ?> selected <?php } ?>>TUTOR</option>
                </select>
            </div>
        </div>
    </div>
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label class="required" for="name" :value="__('Nombre')" />
            <x-input id="name" type="text" name="name" placeholder="" value="{{ $custodian->name }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label class="required" for="last_name2" :value="__('Segundo apellido')" />
            <x-input id="last_name2" type="text" name="last_name2" placeholder="" value="{{ $custodian->last_name2 }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label class="required" for="email_personal" :value="__('Correo electr??nico')" />
            <x-input id="email_personal" type="text" name="email" placeholder="" value="{{ $custodian->email}}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label class="required" for="mobile_number" :value="__('N??mero de tel??fono')" />
            <x-input id="mobile_number" type="number" name="mobile_number" placeholder="" value="{{ $custodian->mobile_number }}" class="block mt-1 w-full" autofocus />
        </div>
    </div>
</div>