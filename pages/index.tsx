import { Playground } from '@gnoide/playground';

export default function Home() {
  return (
    <main>
      <Playground
        files={[
          {
            path: 'test.gno',
            content:
              'package hello\n\nimport "testing"\n\nfunc TestHello(t *testing.T) {\n\tgot := Render("")\n\texpected := "Hello World!"\n\tif got != expected {\n\t\tt.Fatalf("expected %q, got %q.", expected, got)\n\t}\n}',
          },
        ]}
      />
    </main>
  );
}
