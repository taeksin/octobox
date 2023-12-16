import AnswerItem from './AnswerItem';

function AnswerList({ list, author, updated }) {
  return (
    list && (
      <div className="answers-group">
        <h3 className="px-6 mb-5 pb-4 text-2xl border-b border-soGray-light">{`${list.length} Comments`}</h3>
        {list.map((anItem) => (
          <AnswerItem
            key={anItem.commentNo}
            item={anItem}
            author={author}
            updated={updated}
          />
        ))}
      </div>
    )
  );
}

export default AnswerList;
