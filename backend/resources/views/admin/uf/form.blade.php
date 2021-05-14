<?php use App\Models\Module; ?>
<div class="grid grid-cols-2 gap-6">
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label class="required" for="name" :value="__('Número de la UF')" />
            <x-input id="text" type="text" name="name" placeholder="UF1" value="{{ $uf->name }}" class="block mt-1 w-full" autofocus/>
            <br>
            <x-label class="required" for="year" :value="__('Curso de la UF')" />
            <x-input id="text" type="text" name="year" placeholder="1 / 2" value="{{ $uf->year }}" class="block mt-1 w-full" autofocus/>
        </div>
        <div>
            <x-label for="id_module" :value="__('Modulo al que pertenece')" />
            <div class="inline-block relative w-64">
                <select id="type"  name="id_module" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <?php             
                        $module = Module::find($id);                        
                        echo "<option value='$module->id'>$module->name: $module->description</option>";                        
                    ?>
                </select>
            </div>
        </div>
    </div>
    <div class="grid grid-rows-2 gap-6">
        <div>
            <x-label class="required" for="description" :value="__('Nombre completo de la UF')" />
            <x-input id="description" type="text" name="description" value="{{ $uf->description }}" placeholder="" class="block mt-1 w-full" autofocus/>
            <br>
            <x-label class="required" for="hours" :value="__('Horas de la UF')" />
            <x-input id="text" type="text" name="hours" placeholder="" value="{{ $uf->hours }}" class="block mt-1 w-full" autofocus/>
        </div>  
    </div>
</div>