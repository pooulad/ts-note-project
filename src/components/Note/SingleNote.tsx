import { memo } from "react";
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Note } from "../../types/Note";

type NoteProps = {
  onDelete: (id: string) => void;
  notes : Note[]
};

const SingleNote = memo(function SingleNote({ onDelete,notes }: NoteProps) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);
  const navigate = useNavigate();
  if (note == null) return <Navigate to="/" replace />;
  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button
              onClick={() => {
                onDelete(note.id);
                navigate("/");
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Link to="/">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  );
});

export default SingleNote;
