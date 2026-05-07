<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Translation\PotentiallyTranslatedString;
use App\Models\posts;

class MaxPostsRule implements ValidationRule
{
    protected $userId;

    public function __construct($userId = null)
    {
        $this->userId = $userId;
    }

    /**
     * Run the validation rule.
     *
     * @param  Closure(string, ?string=): PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $userId = $this->userId ?? $value;

        $postCount = posts::where('author', $userId)->count();

        if ($postCount >= 3) {
            $fail('This user is only allowed to create a maximum of 3 posts.');
        }
    }
}
