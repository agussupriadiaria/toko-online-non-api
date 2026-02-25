function ModalTest({ data }) {
  if (!data) return null;

  return (
    <div
      className="modal fade"
      id="modaltesting1"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{data.name}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={data.images[0].src}
              alt={data.name}
              className="img-fluid mb-3"
            />
            <p>{data.description}</p>
            <h4 className="text-primary">
              Rp {parseInt(data.price).toLocaleString("id-ID")}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalTest;
