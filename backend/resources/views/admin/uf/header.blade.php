<x-slot name="header">
    <div class="flex justify-between ">
        <div class="flex">
            <a class="set-border-bottom-hover" href="<?php if(isset($_SERVER['HTTP_REFERER'])){ echo $_SERVER['HTTP_REFERER'];} ?>">
                <h2 class="font-semibold text-2xl text-gray-800 leading-tight relative">
                    {{ __('UF') }}
                    <span class="content-head-separator"></span>
                    <span class="arrow-left"></span>
                </h2>
            </a>            
        </div>
</x-slot>