<div class="grid grid-cols-2 gap-6">
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label for="photo_path" :value="__('Fotografía del alumno')" />
            <!-- <x-input id="photo_path" type="text" name="photo_path" placeholder="" value="{{ $student->photo_path }}" class="block mt-1 w-full" autofocus /> -->
            <input type="file" name="photo_path" accept="image/*" />
        </div>
        <div>
            <x-label for="last_name1" :value="__('Primer apellido del alumno')" />
            <x-input id="last_name1" type="text" name="last_name1" placeholder="" value="{{ $student->last_name1 }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="nif" :value="__('DNI del alumno')" />
            <x-input id="nif" type="text" name="nif" placeholder="" value="{{ $student->nif }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="mobile_number" :value="__('Número de teléfono del alumno')" />
            <x-input id="mobile_number" type="integer" name="mobile_number" placeholder="" value="{{ $student->mobile_number }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="enrolment_status" :value="__('Estado de la matrícula')" />
            <div class="inline-block relative w-64">
                <select id="enrolment_status" name="enrolment_status" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="MATRICULADO" <?php if ($student->enrolment_status == "MATRICULADO") { ?> selected <?php } ?>>MATRICULADO</option>
                    <option value="BORRADOR" <?php if ($student->enrolment_status == "BORRADOR") { ?> selected <?php } ?>>BORRADOR</option>
                    <option value="PREMATRICULADO" <?php if ($student->enrolment_status == "PREMATRICULADO") { ?> selected <?php } ?>>PREMATRICULADO</option>
                    <option value="RECHAZADO" <?php if ($student->enrolment_status == "RECHAZADO") { ?> selected <?php } ?>>RECHAZADO</option>
                </select>
            </div>
        </div>
    </div>
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label for="name" :value="__('Nombre del alumno')" />
            <x-input id="name" type="text" name="name" placeholder="" value="{{ $student->name }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="last_name2" :value="__('Segundo apellido del alumno')" />
            <x-input id="last_name2" type="text" name="last_name2" placeholder="" value="{{ $student->last_name2 }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="date_birth" :value="__('Fecha de nacimiento del alumno')" />
            <x-input id="date_birth" type="date" name="date_birth" placeholder="" value="{{ $student->date_birth }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="email_personal" :value="__('Correo electrónico del alumno')" />
            <x-input id="email_personal" type="text" name="email_personal" placeholder="" value="{{ $student->email_personal }}" class="block mt-1 w-full" autofocus />
        </div>
        <div>
            <x-label for="email_pedralbes" :value="__('Correo electrónico del centro para del alumno')" />
            <x-input id="email_pedralbes" type="text" name="email_pedralbes" placeholder="a21XXX@inspedralbes.cat" value="{{ $student->email_pedralbes }}" class="block mt-1 w-full" autofocus />
        </div>
    </div>
</div>