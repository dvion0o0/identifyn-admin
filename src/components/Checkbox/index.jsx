import css from './checkbox.module.scss'

export const Checkbox = ({ children, label, onChange, value, checked, name = '', id }) => {
    return (
        <label className={css.container}>
            {children ? children : ''}
            {label ? label : ''}
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                value={value}
                name={name}
                id={id}
            />
            <span className={css.checkmark} />
        </label>
    )
}
