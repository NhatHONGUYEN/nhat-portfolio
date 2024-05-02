export const ContactInfo = ({ icon, title, value }) => (
  <div>
    {icon}
    <div className="right-side">
      <div>
        <h4>{title}</h4>
        {typeof value === "string" ? (
          <p>{value}</p>
        ) : (
          <a className="email-link" href={`mailto:${value}`}>
            {value}
          </a>
        )}
      </div>
    </div>
  </div>
);
