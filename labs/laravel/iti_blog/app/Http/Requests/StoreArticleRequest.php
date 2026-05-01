<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticleRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title'   => ['required', 'string', 'min:3'],
            'content' => ['required', 'string', 'min:10'],
        ];
    }

    /**
     * Custom error messages.
     */
    public function messages(): array
    {
        return [
            'title.required'   => 'Title is required',
            'title.min'        => 'Title must be at least 3 characters',
            'content.required' => 'Content is required',
            'content.min'      => 'Content must be at least 10 characters',
        ];
    }
}
