# Team headshots

Optional photographs for the team section on `/company`. The section works
without them, so add these whenever they are ready.

## Adding a photo

1. Drop the file here, named after the role:
   `managing-director.jpg`, `operations-manager.jpg`, and so on.
2. Add the `photo` field to that role in `src/lib/team.ts`:

   ```ts
   {
     role: "Managing Director",
     name: "…",
     photo: { src: "/team/managing-director.jpg", width: 800, height: 800 },
     focus: "…",
   }
   ```

## What works best

- **Square crop**, 800 x 800 or larger. The portrait is a circle at 112-128px,
  so anything above 800px is wasted weight. Keep the subject centred: a square
  crop that looks fine as a rectangle can clip an ear once it is masked round.
- **JPEG**, not PNG. These are photographs.
- Head and shoulders, framed consistently across the team: same crop tightness
  and roughly the same eye line, or the row looks ragged even when each photo is
  good on its own.
- A plain or softly blurred background. Busy backgrounds turn to noise at this size.
- Shot against the same wall on the same day if you can. Consistency matters
  more here than production value.

## The card adapts

| Supplied | The card shows |
| --- | --- |
| Photo and name | The circular portrait, name as the heading, role beneath |
| Name only | A monogram of their initials, name as the heading, role beneath |
| Neither | The role icon, role as the heading |

That last row is the current state, and it is a deliberate design rather than a
placeholder: the structure is what the section is really communicating, and it
stays true whether or not a given seat is named.
