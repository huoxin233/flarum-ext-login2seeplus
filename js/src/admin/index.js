import { extend } from 'flarum/common/extend';
import app from 'flarum/common/app';

app.initializers.add('jslirola-login2seeplus', () => {
    app.extensionData.for('jslirola-login2seeplus')
      .registerSetting(() => <legend class="login2seeplus-lenght">{app.translator.trans('jslirola-login2seeplus.admin.post.title')}</legend>)
      .registerSetting({
        setting: 'jslirola.login2seeplus.post',
        type: 'number',
        min: -1
      })
      .registerSetting(createSeparator)
      .registerSetting({
        setting: 'jslirola.login2seeplus.sensitive.input',
        type: 'textarea',
        rows: 10,
        label: app.translator.trans('jslirola-login2seeplus.admin.sensitive.input.label'),
        help: app.translator.trans('jslirola-login2seeplus.admin.sensitive.input.help'),
      })
      .registerSetting({
        setting: 'jslirola.login2seeplus.sensitive.replacewith',
        type: 'text',
        label: app.translator.trans('jslirola-login2seeplus.admin.sensitive.replacewith.label'),
        help: app.translator.trans('jslirola-login2seeplus.admin.sensitive.replacewith.help')
      })
      .registerSetting(createSeparator)
      .registerSetting(() => <legend class="login2seeplus-hide">{app.translator.trans('jslirola-login2seeplus.admin.hide')}</legend>)
      .registerSetting({
        setting: 'jslirola.login2seeplus.link',
        type: 'switch',
        label: app.translator.trans('jslirola-login2seeplus.admin.link')
      })
      .registerSetting({
        setting: 'jslirola.login2seeplus.image',
        type: 'switch',
        label: app.translator.trans('jslirola-login2seeplus.admin.image')
      })
      .registerSetting({
        setting: 'jslirola.login2seeplus.code',
        type: 'switch',
        label: app.translator.trans('jslirola-login2seeplus.admin.code')
      });
});

function createSeparator() {
  return (
    <div class="Separator">
      <hr/>
    </div>
  );
}