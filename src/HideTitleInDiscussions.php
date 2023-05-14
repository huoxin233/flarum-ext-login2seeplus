<?php

namespace JSLirola\Login2SeePlus;

class HideTitleInDiscussions extends FormatContent
{
    public function __invoke($serializer, $model, $attributes)
    {
        if (isset($attributes["title"])) {

            $newTitle = $attributes["title"];

            $s_sensitive = $this->settings->get('jslirola.login2seeplus.sensitive.switch', false);

            $can_noHideSensitive = $serializer->getActor()->can('jslirola-login2seeplus.sensitive.nohide');

            if ($s_sensitive && !$can_noHideSensitive) {
                $userInput = $this->settings->get('jslirola.login2seeplus.sensitive.input');
                $replaceWith = $this->settings->get('jslirola.login2seeplus.sensitive.replacewith');
                $lines = explode("\n", $userInput);
                $searchPattern = '/(?i)' . implode('|', array_map('preg_quote', $lines)) . '/';
                $newTitle = preg_replace($searchPattern, $replaceWith, $newTitle);
            }

            $attributes['title'] = $newTitle;

        }

        return $attributes;
    }

}