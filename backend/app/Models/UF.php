<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UF extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_module',
        'name',
        'hours',
        'year'
    ];
}
