$(function() {
  React.render.Component(
    <CommentBox url="comments.json" pollInterval={2000} />,
    document.getElementById('content')
  );
});
