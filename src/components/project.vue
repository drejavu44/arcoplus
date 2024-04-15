<template>
  <!-- Projects -->
  <div class="proj-container">
    <div class="proj-section-header">
      <h1>Projects</h1>
      <p>
        Explore our recent projects showcasing innovative designs and
        cutting-edge solutions.
      </p>
    </div>
    <div class="project-grid">
      <!-- Project 1 -->
      <div class="project">
        <div class="project-details">
          <img src="../assets/projects/ap-1.jpg" class="project-image" />
          <div class="project-location">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
              class="company-logo"
            />
            Lorem City
          </div>
          <div class="project-address">420 Cornelia Street</div>
          <div class="project-name">Lorem Ipsum</div>
        </div>
      </div>
      <!-- Project 2 -->
      <div class="project">
        <div class="project-details">
          <img src="../assets/projects/ap-4.jpg" class="project-image" />
          <div class="project-location">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
              class="company-logo"
            />
            Lorem City
          </div>
          <div class="project-address">421 Cornelia Street</div>
          <div class="project-name">Lorem Ipsum</div>
        </div>
      </div>
      <!-- Project 3 -->
      <div class="project">
        <div class="project-details">
          <img src="../assets/projects/ap-8.jpg" class="project-image" />
          <div class="project-location">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
              class="company-logo"
            />
            Lorem City
          </div>
          <div class="project-address">422 Cornelia Street</div>
          <div class="project-name">Lorem Ipsum</div>
        </div>
      </div>
      <!-- Project 4 -->
      <div class="project">
        <div class="project-details">
          <img src="../assets/projects/ap-3.jpg" class="project-image" />
          <div class="project-location">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
              class="company-logo"
            />
            Lorem City
          </div>
          <div class="project-address">423 Cornelia Street</div>
          <div class="project-name">Lorem Ipsum</div>
        </div>
      </div>
      <!-- Project 5 -->
      <div class="project">
        <div class="project-details">
          <img src="../assets/projects/ap-5.jpg" class="project-image" />
          <div class="project-location">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
              class="company-logo"
            />
            Lorem City
          </div>
          <div class="project-address">424 Cornelia Street</div>
          <div class="project-name">Lorem Ipsum</div>
        </div>
      </div>
      <!-- Project 6 -->
      <div class="project">
        <div class="project-details">
          <img src="../assets/projects/ap-6.jpg" class="project-image" />
          <div class="project-location">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
              class="company-logo"
            />
            Lorem City
          </div>
          <div class="project-address">425 Cornelia Street</div>
          <div class="project-name">Lorem Ipsum</div>
        </div>
      </div>
      <!-- Project 7 -->
      <div class="project">
        <div class="project-details">
          <img src="../assets/projects/ap-2.jpg" class="project-image" />
          <div class="project-location">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
              class="company-logo"
            />
            Lorem City
          </div>
          <div class="project-address">426 Cornelia Street</div>
          <div class="project-name">Lorem Ipsum</div>
        </div>
      </div>
      <!-- Project 8 -->
      <div class="project">
        <div class="project-details">
          <img src="../assets/projects/ap-7.jpg" class="project-image" />
          <div class="project-location">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
              class="company-logo"
            />
            Lorem City
          </div>
          <div class="project-address">427 Cornelia Street</div>
          <div class="project-name">Lorem Ipsum</div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Projects section */

.proj-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(240, 240, 240, 0.45);
}

.proj-section-header {
  padding: 35px;
  display: flex;
  flex-direction: column;
  color: #1e1e1e;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  align-items: center;
}

.proj-section-header h1 {
  border-bottom: 8px solid rgba(205, 171, 100, 1);
}

.proj-section-header p {
  color: #8f8f8f;
  font-size: 15px;
  font-family: Poppins, sans-serif;
  font-weight: normal;
  margin-bottom: -2%;
}

.project-grid {
  padding: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.project {
  width: calc(25% - 20px);
  margin-bottom: 10px;
  overflow: hidden;
  cursor: pointer;
}

.project-image {
  height: 200px;
  max-height: 200px;
  width: 100%;
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
}

.project-details {
  margin-top: 10px;
  background-color: rgba(240, 240, 240, 0.45);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 1);
  padding: 16px;
  transition: transform 0.3s ease;
}

.company-logo {
  width: 12px;
}

.project-location {
  font-family: Poppins, sans-serif;
  margin-top: 10px;
}

.project-address {
  color: #1e1e1e;
  letter-spacing: 0.5px;
  margin-top: 8px;
  font: 700 16px Poppins, sans-serif;
}

.project-name {
  color: var(--Gray-600, #636363);
  letter-spacing: 0.18px;
  margin-top: 4px;
  font: 14px Poppins, sans-serif;
}

.project:hover .project-details {
  transform: scale(1.1);
}
</style>
