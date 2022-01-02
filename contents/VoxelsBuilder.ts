class VoxelsBuilder {
  static circle(
    o: Box3Vector3,
    r: number,
    block: string | number = "stone",
    t: boolean = false
  ) {
    for (let x = o.x - r; x <= o.x + r; x++) {
      for (let y = o.y - r; y <= o.y + r; y++) {
        for (let z = o.z - r; z <= o.z + r; z++) {
          if (
            t
              ? Math.round(new Box3Vector3(x, y, z).distance(o)) === r
              : new Box3Vector3(x, y, z).distance(o) <= r
          )
            voxels.setVoxel(x, y, z, block);
        }
      }
    }
  }
}
