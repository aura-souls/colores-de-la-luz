<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Therapy extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'name',
        'description',
        'user_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function users() 
    {
        return $this->belongsTo(User::class);
    }
}
