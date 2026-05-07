function FormInput({ label, type, name, value, onChange, error }) {
  return (
    <div className="col">
      <label className="form-label">{label}</label>
      <input type={type} className="form-control"
        name={name} onChange={onChange} value={value} />
      <p className="text-danger">{error}</p>
    </div>
  )
}
export default FormInput;
