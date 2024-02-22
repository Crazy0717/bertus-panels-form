import React from "react";

const Radio = ({ label, type, name, id1, id2 }) => {
	return (
		<div className="m-3">
			<label htmlFor="floatingTextarea2 " className="mb-3">
				{label}
			</label>
			<div className="form-check">
				<input
					className="form-check-input"
					type={type}
					name={name}
					id={id1}
				/>
				<label className="form-check-label" htmlFor={id1}>
					Ha
				</label>
			</div>
			<div className="form-check">
				<input className="form-check-input" type={type} name={name} id={id2} />
				<label className="form-check-label" htmlFor={id2}>
					Yo'q
				</label>
			</div>
		</div>
	);
};

export default Radio;
