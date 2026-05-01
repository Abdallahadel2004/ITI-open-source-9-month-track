<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
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
            "title" => ["required", "min:3", "unique:posts,title," . $this->route('id')],
            "content" => ["required", "min:10"],
            "author" => ["required"],
            "image" => ["nullable", "image", "mimes:jpg,png", "max:2048"],
        ];
    }
    public function messages(): array
    {
        return [
            "title.required" => "Title is required",
            "title.min" => "Title must be at least 3 characters",
            "title.unique" => "Title already exists",
            "content.required" => "Content is required",
            "content.min" => "Content must be at least 10 characters",
            "author.required" => "Author is required",
            "image.image" => "The file must be an image",
            "image.mimes" => "Only .jpg and .png images are allowed",
            "image.max" => "Image size must not exceed 2MB",
        ];
    }
}
