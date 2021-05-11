<div class="grid grid-cols-2 gap-6">
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label for="name_alumno" :value="__('Nombre del alumno')" />
            <x-input id="name_alumno" type="text" name="name_alumno" placeholder="" value="{{ $student->name }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="last_name1" :value="__('Primer apellido del alumno')" />
            <x-input id="last_name1" type="text" name="last_name1" placeholder="" value="{{ $student->last_name1 }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="last_name2" :value="__('Segundo apellido del alumno')" />
            <x-input id="last_name2" type="text" name="last_name2" placeholder="" value="{{ $student->last_name2 }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="dni" :value="__('DNI del alumno')" />
            <x-input id="dni" type="text" name="dni" placeholder="" value="{{ $student->nif }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="date" :value="__('Fecha de nacimiento del alumno')" />
            <x-input id="date" type="date" name="date" placeholder="" value="{{ $student->date_birth }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="num_telf" :value="__('Número de teléfono del alumno')" />
            <x-input id="num_telf" type="integer" name="num_telf" placeholder="" value="{{ $student->mobile_number }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="foto" :value="__('Fotografía del alumno')" />
            <x-input id="foto" type="text" name="foto" placeholder="" value="{{ $student->photo_path }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="estado_matricula" :value="__('Estado de la matrícula')" />
            <div class="inline-block relative w-64">
                <select id="estado_matricula" name="estado_matricula" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="MATRICULADO" <?php if ($student->enrolment_status == "MATRICULADO") { ?> selected <?php } ?>>MATRICULADO</option>
                    <option value="BORRADOR" <?php if ($student->enrolment_status == "BORRADOR") { ?> selected <?php } ?>>BORRADOR</option>
                    <option value="PREMATRICULADO" <?php if ($student->enrolment_status == "PREMATRICULADO") { ?> selected <?php } ?>>PREMATRICULADO</option>
                    <option value="RECHAZADO" <?php if ($student->enrolment_status == "RECHAZADO") { ?> selected <?php } ?>>RECHAZADO</option>
                </select>
            </div>
        </div>
        <div>
            <x-label for="email_pers" :value="__('Correo electrónico del alumno')" />
            <x-input id="email_pers" type="text" name="email_pers" placeholder="" value="{{ $student->email_personal }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="email_pedra" :value="__('Correo electrónico del centro para del alumno')" />
            <x-input id="email_perdra" type="text" name="email_pers" placeholder="a21XXX@inspedralbes.cat" value="{{ $student->email_pedralbes }}" class="block mt-1 w-full" autofocus />
        </div>
    </div>
</div>