import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTitlesAPI } from "../actions/titles";
import { voteAPI } from "../actions/posts";
import { Link } from "react-router-dom";

const TitleList = () => {
  const titles = useSelector(store => store.titles);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function() {
    async function fetchTitle() {
      await dispatch(fetchTitlesAPI());
      setIsLoading(false);
    }

    if (isLoading) {
      fetchTitle();
    }

  }, [dispatch, isLoading]);


  function vote(direction, id) {
    dispatch(voteAPI(id, direction));
  }

  if (isLoading) return <b>Loading</b>;

  if (!isLoading && titles.length === 0) {
    return <b>Please add a post!</b>;
  }

  return (
    <div className="row">
      {titles.map(title => (
        <div key={title.id} className="col">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <Link to={"/" + title.id}>{title.title}</Link>
              </div>
              <div className="card-text">
                <i>{title.description}</i>
              </div>
            </div>
            <div className="card-footer">
              <small>{title.votes} votes</small>
              <i className="fas fa-thumbs-up text-success ml-2"
                  onClick={evt => vote("up", title.id)} />
              <i className="fas fa-thumbs-down text-danger ml-2"
                  onClick={evt => vote("down", title.id)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TitleList;