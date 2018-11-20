import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';

import translate from '../../../i18n';
import Field from '../../../utils/FieldAdapter';
import { FormView, RenderField, Button, primary } from '../../common/components/native';
import { placeholderColor, submit } from '../../common/components/native/styles';
import { required, validate } from '../../../../../common/modules/validation';

const postFormSchema = {
  title: [required],
  content: [required]
};

const PostForm = ({ values, handleSubmit, t }) => {
  return (
    <FormView style={{ paddingHorizontal: 15 }}>
      <Field
        name="title"
        component={RenderField}
        type="text"
        placeholder={t('post.field.title')}
        value={values.title}
        placeholderTextColor={placeholderColor}
      />
      {/* <Field
        name="content"
        component={RenderField}
        type="text"
        placeholder={t('post.field.content')}
        value={values.content}
        placeholderTextColor={placeholderColor}
      />
      <View style={submit}>
        <Button type={primary} onPress={handleSubmit}>
          {t('post.btn.submit')}
        </Button>
      </View> */}
    </FormView>
  );
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  values: PropTypes.object,
  t: PropTypes.func
};

const PostFormWithFormik = withFormik({
  mapPropsToValues: props => ({
    title: props.post && props.post.title,
    content: props.post && props.post.content
  }),
  validate: values => validate(values, postFormSchema),
  handleSubmit(
    values,
    {
      props: { onSubmit }
    }
  ) {
    onSubmit(values);
  },
  displayName: 'PostForm' // helps with React DevTools
});

export default translate('post')(PostFormWithFormik(PostForm));
