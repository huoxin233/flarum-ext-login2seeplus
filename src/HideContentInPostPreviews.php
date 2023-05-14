<?php

/*
 * This file is part of jslirola/flarum-ext-login2seeplus.
 *
 * Copyright (c) 2020
 * Original Extension by WiseClock
 * Updated by jslirola
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace JSLirola\Login2SeePlus;

class HideContentInPostPreviews extends FormatContent
{
    public function __invoke($serializer, $model, $attributes)
    {
        if (isset($attributes["contentHtml"])) {

            $newHTML = $attributes["contentHtml"];

            /*if (!$serializer->getActor()->isGuest() && $serializer->getActor()->is_email_confirmed === 1)
                return $attributes;*/

            $s_summary_links = $this->settings->get('jslirola.login2seeplus.link', false);
            $s_sensitive = $this->settings->get('jslirola.login2seeplus.sensitive.switch', false);

            $can_noHideLinks = $serializer->getActor()->can('jslirola-login2seeplus.link.nohide');
            $can_noHideSensitive = $serializer->getActor()->can('jslirola-login2seeplus.sensitive.nohide');

            if (!is_null($newHTML) && $s_summary_links  && !$can_noHideLinks)
                $newHTML = preg_replace('/(<a((?!PostMention).)*?>)[^<]*<\/a>/is',
                    '[' . $this->get_link('jslirola-login2seeplus.forum.link') . ']', $newHTML);
            
            if (!is_null($newHTML) && $s_sensitive && !$can_noHideSensitive) {
                $userInput = $this->settings->get('jslirola.login2seeplus.sensitive.input');
                $replaceWith = $this->settings->get('jslirola.login2seeplus.sensitive.replacewith');
                $lines = explode("\n", $userInput);
                $searchPattern = '/(?i)' . implode('|', array_map('preg_quote', $lines)) . '/';
                $newHTML = preg_replace($searchPattern, $replaceWith, $newHTML);
            }

            $attributes['contentHtml'] = $newHTML;

        }

        return $attributes;
    }

}
