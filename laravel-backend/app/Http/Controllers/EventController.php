<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventCreateRequest;
use App\Http\Requests\EventDeleteRequest;
use App\Http\Resources\EventIndexResource;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index(Request $request)
    {
        return EventIndexResource::collection(Event::with('participants')->get());
    }

    public function store(EventCreateRequest $request)
    {
        $validated = $request->validated();
        $event = $request->user()->events()->create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'creation_date' => now(),
            ]);
        return new EventIndexResource($event);
    }

    public function destroy (EventDeleteRequest $request, Event $event) {
        $event->delete();
        return response()->json('Success', 204);
    }

    public function start_participating(Request $request, Event $event) {
        $event->participants()->detach($request->user());
        $event->participants()->attach($request->user());
        return response()->json('Success', 201);
    }

    public function stop_participating(Request $request, Event $event) {
        $event->participants()->detach($request->user());
        return response()->json('Success', 201);
    }
}
