export const buildingTwo = {
  id: "B-2025-001",
  name: "Modern Office Tower",
  location: "Petah Tikva, Israel",
  status: "under_construction",
  dimensions: {
    floors: 4,
    floorHeight: 3.2, // in meters
    width: 20,        // in meters
    depth: 15,        // in meters
  },
  materials: ["concrete", "glass", "steel"],
  elements: {
    walls: [
      // Floor 1 exterior walls (clockwise rectangle)
      {
        id: "W1",
        start: { x: 0, y: 0 },
        end:   { x: 20, y: 0 },
        height: 3.2,
        floor: 1
      },
      {
        id: "W2",
        start: { x: 20, y: 0 },
        end:   { x: 20, y: 15 },
        height: 3.2,
        floor: 1
      },
      {
        id: "W3",
        start: { x: 20, y: 15 },
        end:   { x: 0, y: 15 },
        height: 3.2,
        floor: 1
      },
      {
        id: "W4",
        start: { x: 0, y: 15 },
        end:   { x: 0, y: 0 },
        height: 3.2,
        floor: 1
      },
      // Floor 2 walls (same footprint)
      {
        id: "W5",
        start: { x: 0, y: 0 },
        end:   { x: 20, y: 0 },
        height: 3.2,
        floor: 2
      },
      {
        id: "W6",
        start: { x: 20, y: 0 },
        end:   { x: 20, y: 15 },
        height: 3.2,
        floor: 2
      },
      {
        id: "W7",
        start: { x: 20, y: 15 },
        end:   { x: 0, y: 15 },
        height: 3.2,
        floor: 2
      },
      {
        id: "W8",
        start: { x: 0, y: 15 },
        end:   { x: 0, y: 0 },
        height: 3.2,
        floor: 2
      },
    ],
    doors: [
      {
        id: "D1",
        wallId: "W1",
        position: { x: 2, y : 0 },
        width: 1,
        height: 2.1,
        floor: 1,
        type: "single"
      }
    ],
    floors: [
      {
        id: "F1",
        level: 1,
        height: 3.2,
        rooms: [
          {
            id: "R1",
            name: "Lobby",
            area: 60,
            doors: ["D1"]
          }
        ]
      },
      {
        id: "F2",
        level: 2,
        height: 3.2,
        rooms: [
          {
            id: "R2",
            name: "Conference Room",
            area: 90,
            doors: []
          }
        ]
      }
    ]
  }
};
