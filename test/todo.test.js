const {app, server} = require("../app");
const request = require("supertest");

describe("API /todo", () => {
  it("GET /todo", async () => {
    // Removed 'done'
    const response = await request(app).get("/todo").expect(200);
    const firstData = response.body[0];
    expect(firstData.status).toBe("active");
  });

  it("GET /todo/:id - Should return a single todo", async () => {
    const response = await request(app).get("/todo/2").expect(200);
    expect(response.body.title).toBe("Olahraga");
  });

  it("POST /todo - Should create a new todo", async () => {
    const response = await request(app)
      .post("/todo")
      .send({
        title: "Test Create Todo",
        status: "active",
      })
      .expect(201);
    expect(response.body.title).toBe("Test Create Todo");
    expect(response.body.status).toBe("active");
  });

it("PUT /todo/:id - Should update a todo", async () => {
    const response = await request(app)
        .put("/todo/5")
        .send({
            title: "Dufan",
        })
        .expect(200);
    expect(response.body.message).toBe("Update successful");
});

  it("DELETE /todo/:id - Should delete a todo", async () => {
      const response = await request(app).delete("/todo/1").expect(200);
      expect(response.body.message).toBe("Delete successful");
  });
});

afterAll(done =>{
    server.close()
    done()
})
