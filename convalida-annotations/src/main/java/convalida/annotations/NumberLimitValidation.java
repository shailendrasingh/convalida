package convalida.annotations;

import android.support.annotation.StringRes;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.SOURCE;

/**
 * @author wellingtoncosta on 01/06/18
 */
@Target(FIELD)
@Retention(SOURCE)
public @interface NumberLimitValidation {

    String min();

    String max();

    @StringRes int errorMessage();

    boolean autoDismiss() default true;

    boolean required() default true;

}
