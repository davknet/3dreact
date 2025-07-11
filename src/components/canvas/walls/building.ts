export const building = {
  buildingId: "B-001",
  name: "Tech Innovation Hub",
  location: "Petah Tikva, Israel",
  architect: "David Kahadze",
  engineer: "MK Engineering Ltd.",
  status: "under_construction",
  yearBuilt: 2025,
  dimensions: {
    floors: 3,
    heightMeters: 12.5,
    footprintSqM: 480
  },
  materials: ["concrete", "glass", "steel"],
  elements: {
    walls: [
      {
        id: "W1",
        type: "exterior",
        material: "concrete",
        thicknessCm: 30,
        startPoint: { x: 0, y: 0, z: 0 },
        endPoint: { x: 12.5, y: 0, z: 0 },
        heightMeters: 3,
        floor: 1
      }
    ],
    doors: [
      {
        id: "D1",
        wallId: "W1",
        position: { x: 3, y: 0, z: 0 },
        widthMeters: 0.9,
        heightMeters: 2.1,
        type: "single swing"
      }
    ],
    floors: [
      {
        level: 1,
        heightMeters: 3.5,
        material: "reinforced concrete",
        rooms: [
          {
            id: "R1",
            name: "Lobby",
            areaSqM: 40,
            flooring: "tile",
            windows: [],
            doors: ["D1"]
          }
        ]
      }
    ]
  }
};
