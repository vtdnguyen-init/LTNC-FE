import axios, { AxiosResponse } from "axios";

export interface medicalHistory {
  name: string,
  process: string,
}

export interface createPatient {
  name: string,
  date_of_birth: string,
  gender: string,
  phoneNumber: string,
  cccd: string,
  medicalHistory: medicalHistory[]
  address: string,
}

export interface updatePatient {
  cccd: string, 
  name: string,
  phoneNumber: string,
  address: string,
  medicalHistory: medicalHistory[],
}

export interface queryPatient {
  cccd: string, 
}

export interface dosage {
  evening: string,
  morning: string,
  noon:    string,
}

export interface prescription {
  dosage : dosage
  medicine: string,
  quantity: number
}

export interface testResult {
  result: string,
  testName: string,
}

export interface createRecords {
  date: string,
  description: string,
  diagnosis: string,
  prescription: prescription[],
  testResult: testResult[],
}

export interface queryRecords {
  date: string,
}

class Patient {
  private baseUrl: string;
  constructor() {
      this.baseUrl = "http://localhost:3000/api/v1/patient";
  } 

  async createPatient (info : createPatient) {
    try {
      const response: AxiosResponse = await axios.post(`${this.baseUrl}/create_patient`, info, {
          withCredentials: true,
      });

      const data = response.data;
      return { error: data.error, message: data.message };
    } 
    catch (error: any) {
        console.log("Error creating patient: ", error.response.data);
        return error.response.data;
    }
  }

  async updatePatient (info : updatePatient, condition: queryPatient) {
    try {
      const response: AxiosResponse = await axios.put(`${this.baseUrl}/update_patient${condition}`, info, {
          withCredentials: true,
      });

      const data = response.data;
      return { error: data.error, message: data.message };
    } 
    catch (error: any) {
        console.log("Error updating patient: ", error.response.data);
        return error.response.data;
    }
  }

  async removePatient (condition: queryPatient) {
    try {
      const response: AxiosResponse = await axios.put(`${this.baseUrl}/remove_patient${condition}`, {
          withCredentials: true,
      });

      const data = response.data;
      return { error: data.error, message: data.message };
    } 
    catch (error: any) {
        console.log("Error deleting patient: ", error.response.data);
        return error.response.data;
    }
  }

  async removeRecords (condition: queryRecords) {
    try {
      const response: AxiosResponse = await axios.put(`${this.baseUrl}/remove_records${condition}`, {
          withCredentials: true,
      });

      const data = response.data;
      return { error: data.error, message: data.message };
    } 
    catch (error: any) {
        console.log("Error deleting record: ", error.response.data);
        return error.response.data;
    }
  }

  async createRecords (info : createRecords) {
    try {
      const response: AxiosResponse = await axios.put(`${this.baseUrl}/create_records`, info, {
          withCredentials: true,
      });

      const data = response.data;
      return { error: data.error, message: data.message };
    } 
    catch (error: any) {
        console.log("Error create record: ", error.response.data);
        return error.response.data;
    }
  }

  async findTreatment (condition : queryPatient) {
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/find_treatment${condition}`, {
          withCredentials: true,
      });

      const data = response.data;
      return { error: data.error, message: data.message };
    } 
    catch (error: any) {
        console.log("Error find all treatment: ", error.response.data);
        return error.response.data;
    }
  }

  async findPatient (condition : queryPatient) {
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/find_patient${condition}`, {
          withCredentials: true,
      });

      const data = response.data;
      return { error: data.error, message: data.message };
    } 
    catch (error: any) {
        console.log("Error find patient: ", error.response.data);
        return error.response.data;
    }
  }

  async findAllPatient () {
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/find_patient_all`, {
          withCredentials: true,
      });

      const data = response.data;
      return { error: data.error, message: data.message };
    } 
    catch (error: any) {
        console.log("Error find all patient: ", error.response.data);
        return error.response.data;
    }
  }

  async findRecords (condition : queryRecords) {
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/find_records${condition}`, {
          withCredentials: true,
      });

      const data = response.data;
      return { error: data.error, message: data.message };
    } 
    catch (error: any) {
        console.log("Error find record: ", error.response.data);
        return error.response.data;
    }
  }

}

export interface workinghours {
	day: string,
	start_time: string,
	end_time: string,
}

export interface createStaff {
	cccd:  string,
	name:  string,
	email: string,
	gender: string, // Giới tính female hoặc male
	birthday: string, // Kiểm tra ngày sinh theo định dạng yyyy-mm-dd và bắt buộc
	address: string,
	degree : string,
	clinic: string,
	position: string,
	specialized: string,
	role: string,
	working_hours: workinghours[],
}

export interface queryStaff {
  	cccd: string,
}

export interface updateStaff {
	address: string,
	degree : string,
	specialized : string,
	clinic: string,
	position: string,
	working_hours: workinghours[],
}

class Staff {
	private baseUrl: string;
	constructor() {
		this.baseUrl = "http://localhost:3000/api/v1/staff";
	}

	async createStaff (info: createStaff ) {
		try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
				withCredentials: true,
			});
	  
			const data = response.data;
			return { error: data.error, message: data.message };
		} 
		catch (error: any) {
			console.log("Error creating patient: ", error.response.data);
			return error.response.data;
		}
	}

	async findStaff (condition: queryStaff ) {
		try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/detail${condition}`, {
				withCredentials: true,
			});
	  
			const data = response.data;
			return { error: data.error, message: data.message };
		} 
		catch (error: any) {
			console.log("Error finding staff: ", error.response.data);
			return error.response.data;
		}
	}

	async deleteStaff (condition : queryStaff) {
		try {
			const response: AxiosResponse = await axios.put(`${this.baseUrl}/delete${condition}`, {
				withCredentials: true,
			});
	  
			const data = response.data;
			return { error: data.error, message: data.message };
		} 
		catch (error: any) {
			console.log("Error removing staff: ", error.response.data);
			return error.response.data;
		}
	}

	async updateStaff (condition : queryStaff, info : updateStaff) {
		try {
			const response: AxiosResponse = await axios.put(`${this.baseUrl}/update${condition}`, info, {
				withCredentials: true,
			});
	  
			const data = response.data;
			return { error: data.error, message: data.message };
		} 
		catch (error: any) {
			console.log("Error updating staff: ", error.response.data);
			return error.response.data;
		}
	}
}


export interface loginInfo {
	account: string,
	password: string,
}

class Authenticate {
	private baseUrl: string;
	constructor() {
		this.baseUrl = "http://localhost:3000/api/v1/authenticate";
	}

	async login (info: loginInfo ) {
		try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/login`, info, {
				withCredentials: true,
			});
	  
			const data = response.data;
			return { error: data.error, message: data.message };
		} 
		catch (error: any) {
			console.log("Error creating patient: ", error.response.data);
			return error.response.data;
		}
	}

  async logout() {
		try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/logout`, {
				withCredentials: true,
			});
	  
			const data = response.data;
			return { error: data.error, message: data.message };
		} 
		catch (error: any) {
			console.log("Error logout: ", error.response.data);
			return error.response.data;
		}
	}
}

export {
	Patient,
	Staff,
	Authenticate,
}