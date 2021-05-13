<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Custodian extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_student',
        'responsible',
        'nif',
        'name',
        'last_name1',
        'last_name2',
        'mobile_number'
    ];
}
