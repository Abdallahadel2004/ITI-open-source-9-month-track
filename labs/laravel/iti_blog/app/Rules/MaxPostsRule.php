<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Translation\PotentiallyTranslatedString;
use App\Models\posts;

class MaxPostsRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  Closure(string, ?string=): PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $postCount = posts::where('author', $value)->count();

        if ($postCount >= 3) {
            $fail('This user is only allowed to create a maximum of 3 posts.');
        }
    }
}
