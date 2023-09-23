<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::get()->each(function (User $user) {
            $user->my_events()->attach(Event::inRandomOrder()->take(rand(1, 2))->pluck('id'));
        });
    }
}
