import React from "react";
import ModalMessage from './modelmessage'
import Senddraftcompose from './senddraftcompose'
export const InboxHtml = ({ parent }) => {
  return (
    <main className="px-2 flex-fill">
      <div className="row">
        <div className="col-12 px-4 d-flex flex-column">
          <div className="row">
            <div className="col-lg-3 col-md-4 py-3">
              <ul className="list-group sticky-top sticky-offset">
                <button
                  className="btn btn-block btn-outline-secondary my-1 text-uppercase"
                  data-target="#composeModal"
                  data-toggle="modal"
                >
                  Compose <i className="align-middle icon-pencil" />
                </button>
                <div className="nav nav-pills py-2 flex-md-column justify-content-center">
                  <a
                    href={{ void: 0 }}
                    className="colormessage active"
                    title="Messages"
                    data-toggle="tab"
                    data-target="#messages"
                  >
                    <i className=" fa fa-fw fa-envelope mr-md-1" />
                    <span className="d-none d-md-inline">Messages</span>
                    <span
                      className="badge badge-pill badge-dark small font-weight-light ml-1"
                      title="Unread"
                    >
                      {
                        parent.state.messages.filter((el) => {
                          return !el.read;
                        }).length
                      }
                    </span>
                  </a>
                  <a
                    href={{ void: 0 }}
                    className="colormessage"
                    title="Deleted"
                    data-toggle="tab"
                    data-target="#deleted"
                  >
                    <span className="icon icon-trash fa fa-fw fa-trash mr-md-1" />
                    <span className="d-none d-md-inline">Supprimer</span>
                    <span
                      className="badge badge-pill badge-dark small font-weight-light ml-1"
                      title="Deleted"
                    >
                      {parent.state.deleted.length}
                    </span>
                  </a>
                  <a
                    href={{ void: 0 }}
                    className="colormessage"
                    title="enregistrer"
                    data-toggle="tab"
                    data-target="#enregistrer"
                  >
                    <span  className="fa fa-floppy-o mr-md-1"/>
                    <span className="d-none d-md-inline">Enregistrer</span>
                    <span
                      className="badge badge-pill badge-dark small font-weight-light ml-1"
                      title="Deleted"
                    >
                      {parent.state.draft.length}
                    </span>
                  </a>
                </div>
                <div className="d-md-block d-none">
                  <hr />
               
                </div>
              </ul>
            </div>
            <div className="col-md py-3 tab-content">
              <div id="messages" className="tab-pane active">
                <div className="d-flex flex-sm-row flex-column py-1 mb-1">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-outline-secondary text-uppercase"
                      onClick={parent.toggleMarkAll}
                    >
                      <div
                        className="custom-control custom-checkbox"
                        onClick={parent.toggleMarkAll}
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="checkAll"
                          defaultChecked={false}
                          onChange={parent.toggleMarkAll}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="checkAll"
                        >
                          Mark
                        </label>
                      </div>
                    </button>
                    {parent.state.messages &&
                    parent.state.messages.filter((el) => {
                      if (el.marked === 1) {
                        return el;
                      }
                    }).length > 0 ? (
                      <div className="btn-group mr-sm-auto mr-none">
                        <button
                          type="button"
                          className="btn btn-outline-secondary dropdown-toggle text-uppercase"
                          data-toggle="dropdown"
                        />
                        <div className="dropdown-menu" id="dd1">
                          <a
                            className="dropdown-item"
                            onClick={parent.deleteMarked}
                          >
                            Delete marked items
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </div>
                 { /*
                  <button
                    type="button"
                    className="btn btn-outline-secondary mr-sm-1 mr-none"
                    data-target="#composeModal"
                    data-toggle="modal"
                  >
                    <i className="align-middle icon-pencil fa fa-edit" />
                  </button>*/ }
                </div>
                 
                {/* message list */}
                <ul className="list-group py-2">
                  {parent.state.messages && parent.state.messages.length > 0
                    ? parent.state.messages.map((item, idx) => (
                        <li
                          key={idx}
                          className="list-group-item list-group-item-action d-block py-1"
                        >
                          <summary className= {item.read == true ? "row" :"bagroundmessagenonlu row" }  >
                            <div className="col py-2 order-1">
                              <div
                                onClick={() => parent.toggleMark(idx)}
                                className="custom-control custom-checkbox"
                              >
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  name={"check" + idx}
                                  checked={item.marked === 1}
                                  onChange={() => parent.toggleMark(idx)}
                                />
                                <label
                                  className="custom-control-label text-nowrap"
                                  htmlFor={"check" + idx}
                                >
                                  <a
                                    title="send mail"
                                    href={"mailto:" + item.fromAddress}
                                  >
                                    {item.from}{" "}
                                    {item.read ?<span className="fa fa-envelope-open-o"></span> :
                                   <span className="fa fa-envelope-square" />
                                    }


                                  </a>
                                </label>
                              </div>
                            </div>
                            <div className="col-auto px-0 order-last order-sm-2 d-none d-sm-block align-self-center text-right">
                              <a
                                className="text-secondary px-md-1"
                                title="Deleted"
                                onClick={() => parent.doDelete(idx)}
                              >
                                <span className="icon icon-trash fa fa-fw fa-trash" />
                              </a>
                            </div>
                            <div
                         
                              className="col-sm-12 col-10 py-2 order-3"
                            
                            >
                              <div className="float-right text-right">
                                <span
                                  className={
                                    " d-none d-sm-block " +
                                    (!item.read ? "font-weight-bold" : "")
                                  }
                                >
                                  {item.dtSent}
                                </span>
                              </div>
                              <p className="lead mb-0">
                                <a
                                  title={
                                    !item.read
                                      ? "un nouvaux message"
                                      : "vous avez lire deja ce message"
                                  }
                                 
                                >
                                  {item.subject} 
                                  
                                </a>
                                <p style={{width : "100px"}}>{" "}</p>
                                {item.attachment ? (
                                  <i className="align-middle fa fa-paperclip icon-paper-clip" />
                                ) : null}
                                <span key={idx}  style={{ width:"60px"}} width="20"  onClick={() => parent.doShow(idx)}>
                                <ModalMessage message={item}    key={idx}/>
                                </span>
                               
                              </p>
                            </div>
                          </summary>
                        </li>
                      ))
                    : <h5 className="text-center"> vous n'avez pas encore des messages</h5>}
                </ul>
              </div>
              <div id="deleted" className="tab-pane">
                {/* deleted items */}
                <h5>Messages Supprimer({parent.state.deleted.length})</h5>
                <div className="row">
                  {parent.state.deleted && parent.state.deleted.length > 0
                    ? parent.state.deleted.map((item, idx) => (
                        <div className="col-12" key={idx}>
                          <a href>
                            {item.from} ({item.fromAddress})
                            <span className="px-2">
                              {item.subject.substring(0, 20)}...
                            </span>
                          </a>
                        </div>
                      ))
                    : null}
                </div>
              </div>
              <div id="enregistrer" className="tab-pane">
              <ul className="list-group py-2">
                  {parent.state.draft && parent.state.draft.length > 0
                    ? parent.state.draft.map((item, idx) => (
                        <li
                          key={idx}
                          className="list-group-item list-group-item-action d-block py-1"
                        >
                          <summary >
                            <div className="col py-2 order-1">
                              <div
                                onClick={() => parent.toggleMark(idx)}
                                className="custom-control custom-checkbox"
                              >
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  name={"check" + idx}
                                  checked={item.marked === 1}
                                  onChange={() => parent.toggleMark(idx)}
                                />
                                <label
                                  className="custom-control-label text-nowrap"
                                  htmlFor={"check" + idx}
                                >
                                  <a
                                    title="send mail"
                                    href={"mailto:" + item.fromAddress}
                                  >
                                    {item.from}{" "}
                                    {item.read ?<span className="fa fa-envelope-open-o"></span> :
                                   <span className="fa fa-pencil-square-o" 
                                    />
                                    }


                                  </a>
                                </label>
                              </div>
                            </div>
                            <div className="col-auto px-0 order-last order-sm-2 d-none d-sm-block align-self-center text-right">
                              <a
                                className="text-secondary px-md-1"
                                title="Deleted"
                                onClick={() => parent.doDeletedraft(idx)}
                              >
                                <span className="icon icon-trash fa fa-fw fa-trash" />
                              </a>
                            </div>
                            <div
                         
                              className="col-sm-12 col-10 py-2 order-3"
                            
                            >
                              <div className="float-right text-right">
                                <span
                                  className={
                                    " d-none d-sm-block " +
                                    (!item.read ? "font-weight-bold" : "")
                                  }
                                >
                                  {item.dtSent}
                                </span>
                              </div>
                              <p className="lead mb-0">
                                <a
                                  title={
                                    !item.read
                                      ? "un nouvaux message"
                                      : "vous avez lire deja ce message"
                                  }
                                 
                                >
                                  {item.subject}
                                </a>
                                {item.attachment ? (
                                  <i className="align-middle fa fa-paperclip icon-paper-clip" />
                                ) : null}
                                 <p style={{width : "100px"}}>{" "}</p>
                                <span  style={{ width:"60px"}} width="20"  onClick={() => parent.doShowdraft(idx)}>
                                <Senddraftcompose message={item} key={idx} />
                                </span>
                               
                              </p>
                            </div>
                          </summary>
                        </li>
                      ))
                    : <h5 className="text-center"> vous n'avez pas encore des messages</h5>}
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InboxHtml;
