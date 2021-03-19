import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;

      const userProfile = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(userProfile);

    } catch (error) {
      return response.status(404).json({ error: "Deu erro" });
    }
  }
}

export { ShowUserProfileController };
