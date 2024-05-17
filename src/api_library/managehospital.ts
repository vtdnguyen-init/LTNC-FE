import axios, { AxiosResponse } from "axios";
import { expression } from "joi";

export interface medicalHistory {
  name: string;
  process: string;
}

export interface createPatient {
  name: string;
  date_of_birth: string;
  gender: string;
  phoneNumber: string;
  cccd: string;
  medicalHistory: medicalHistory[];
  address: string;
  email: string;
  record: string;
}

export interface updatePatient {
  cccd: string;
  name: string;
  phoneNumber: string;
  address: string;
  medicalHistory: medicalHistory[];
}

export interface queryPatient {
  cccd: string;
}

export interface prescription {
  evening: number;
  morning: number;
  noon: number;
  medicine: string;
  quantity: number;
  medicineID: string;
}

export interface testResult {
  result: string;
  testName: string;
}

export interface createRecords {
  date: string;
  description: string;
  diagnosis: string;
  prescription: prescription[];
  testResult: testResult[];
}

export interface queryRecords {
  date: string;
  cccd: string;
}

export interface registerInfo {
  cccd: string;
  faculty: string;
}

export interface queryPatientInQueue {
  cccd: string;
  faculty: string;
}

class Patient {
  private baseUrl: string;
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/patient";
  }

  async createPatient(info: createPatient) {
    try {
      const response: AxiosResponse = await axios.post(
        `${this.baseUrl}/create_patient`,
        info,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async updatePatient(info: updatePatient, condition: queryPatient) {
    try {
      const response: AxiosResponse = await axios.put(
        `${this.baseUrl}/update_patient?cccd=${condition.cccd}`,
        info,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error updating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async removePatient(condition: queryPatient) {
    try {
      const response: AxiosResponse = await axios.put(
        `${this.baseUrl}/remove_patient?cccd=${condition.cccd}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error deleting patient: ", error.response.data);
      return error.response.data;
    }
  }

  async removeRecords(condition: queryRecords) {
    try {
      const response: AxiosResponse = await axios.put(
        `${this.baseUrl}/remove_records?date=${condition.date}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error deleting record: ", error.response.data);
      return error.response.data;
    }
  }

  async createRecords(info: createRecords, condition: queryPatient) {
    try {
      const response: AxiosResponse = await axios.post(
        `${this.baseUrl}/create_records?cccd=${condition.cccd}`,
        info,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error create record: ", error.response.data);
      return error.response.data;
    }
  }

  async findTreatment(condition: queryPatient) {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/find_treatment?cccd=${condition.cccd}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return {
        error: data.error,
        data: data.medicalHistory,
        message: data.message,
      };
    } catch (error: any) {
      console.log("Error find all treatment: ", error.response.data);
      return error.response.data;
    }
  }

  async findPatient(condition: queryPatient) {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/find_patient?cccd=${condition.cccd}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error find patient: ", error.response.data);
      return error.response.data;
    }
  }

  async findAllPatient() {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/find_patient_all`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error find all patient: ", error.response.data);
      return error.response.data;
    }
  }

  async findRecords(condition: queryRecords) {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/find_records?cccd=${condition.cccd}&date=${condition.date}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error find record: ", error.response.data);
      return error.response.data;
    }
  }

  async createRegister(info: registerInfo) {
    try {
      const response: AxiosResponse = await axios.post(
        `${this.baseUrl}/register_patient`,
        info,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error register patient: ", error.response.data);
      return error.response.data;
    }
  }

  async findPatientsInQueue() {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/find_patient_in_queue`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error find all patient in queue: ", error.response.data);
      return error.response.data;
    }
  }

  async updateStatusAferRegister(condition: queryPatientInQueue) {
    try {
      const response: AxiosResponse = await axios.put(
        `${this.baseUrl}/update_status?cccd=${condition.cccd}&faculty=${condition.faculty}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error updating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async completeHealing(condition: queryPatientInQueue) {
    try {
      const response: AxiosResponse = await axios.put(
        `${this.baseUrl}/complete_healing?cccd=${condition.cccd}&faculty=${condition.faculty}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error updating patient: ", error.response.data);
      return error.response.data;
    }
  }
}

export interface workinghours {
  day: string;
  start_time: string;
  end_time: string;
}

export interface createStaff {
  cccd: string;
  name: string;
  email: string;
  gender: string; // Giới tính female hoặc male
  birthday: string; // Kiểm tra ngày sinh theo định dạng yyyy-mm-dd và bắt buộc
  address: string;
  degree: string;
  clinic: string;
  position: string;
  specialized: string;
  role: string;
  working_hours: workinghours[];
  faculty: string;
}

export interface queryStaff {
  cccd: string;
}

export interface updateStaff {
  address: string;
  degree: string;
  specialized: string;
  clinic: string;
  position: string;
  working_hours: workinghours[];
}

class Staff {
  private baseUrl: string;
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/staff";
  }

  async createStaff(info: createStaff) {
    try {
      const response: AxiosResponse = await axios.post(
        `${this.baseUrl}/create`,
        info,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async findStaff(condition: queryStaff) {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/detail?cccd=${condition.cccd}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error finding staff: ", error.response.data);
      return error.response.data;
    }
  }

  async getschedule() {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/getschedule`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error finding staff: ", error.response.data);
      return error.response.data;
    }
  }

  async deleteStaff(condition: queryStaff) {
    try {
      const response: AxiosResponse = await axios.put(
        `${this.baseUrl}/delete?cccd=${condition.cccd}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error removing staff: ", error.response.data);
      return error.response.data;
    }
  }

  async updateStaff(condition: queryStaff, info: updateStaff) {
    try {
      const response: AxiosResponse = await axios.put(
        `${this.baseUrl}/update?cccd=${condition.cccd}`,
        info,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error updating staff: ", error.response.data);
      return error.response.data;
    }
  }

  async findAllStaff() {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/getalldoctor`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error updating staff: ", error.response.data);
      return error.response.data;
    }
  }
}

export interface loginInfo {
  account: string;
  password: string;
}

class Authenticate {
  private baseUrl: string;
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/authenticate";
  }

  async login(info: loginInfo) {
    try {
      const response: AxiosResponse = await axios.post(
        `${this.baseUrl}/login`,
        info,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.info, message: data.message };
    } catch (error: any) {
      console.log("Error login: ", error.response.data);
      return error.response.data;
    }
  }

  async logout() {
    try {
      const response: AxiosResponse = await axios.post(
        `${this.baseUrl}/logout`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error logout: ", error.response.data);
      return error.response.data;
    }
  }

  async getUser() {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/getUser`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error getUser: ", error.response.data);
      return error.response.data;
    }
  }
}

export interface createMedicine {
  name: string;
  brand: string;
  disposal_price: number;
  expiration_date: string;
  manufacture_date: string;
  origin: string;
  purchase_price: number;
  quantity: number;
}

export interface QueryMedicine {
  id: string;
}

export interface updateMedicine {
  brand: string;
  disposal_price: number;
  expiration_date: string;
  manufacture_date: string;
  origin: string;
  purchase_price: number;
  quantity: number;
  name: string;
}

class MedicalManage {
  private baseUrl: string;
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/medicine";
  }

  async createMedicine(info: createMedicine) {
    try {
      const response: AxiosResponse = await axios.post(
        `${this.baseUrl}/create`,
        info,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async getDetail(condition: QueryMedicine) {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/getDetail?id=${condition.id}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async getExpire() {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/getExp`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async getData() {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/getData`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async deleteMedicine(condition: QueryMedicine) {
    try {
      const response: AxiosResponse = await axios.put(
        `${this.baseUrl}/delete?id=${condition.id}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async updateMedicine(condition: QueryMedicine, info: updateMedicine) {
    try {
      const response: AxiosResponse = await axios.put(
        `${this.baseUrl}/update?id=${condition.id}`,
        info,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error updating medicine: ", error.response.data);
      return error.response.data;
    }
  }
}

export interface warantyHist {
  date: string;
}

export interface createMedicalEquipment {
  name: string;
  warranty_expiration_date: string;
  status: string;
  purchase_price: number;
  warranty_history: warantyHist[];
}

export interface queryMedicalEquipment {
  id: string;
}

export interface warranty_history {
  date: string;
  description: string;
}

export interface updateMedicalEquip {
  name: string;
  warranty_expiration_date: string;
  status: string;
  purchase_price: number;
  warranty_history: warranty_history[];
}

class medicalEquipment {
  private baseUrl: string;
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/medicalEquip";
  }

  async createMedicalEquipment(info: createMedicalEquipment) {
    try {
      const response: AxiosResponse = await axios.post(
        `${this.baseUrl}/create`,
        info,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async getDetail(condition: queryMedicalEquipment) {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/getDetail?id=${condition.id}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async getExpire() {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/getExp`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async getData() {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseUrl}/getData`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, data: data.data, message: data.message };
    } catch (error: any) {
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async deleteMedicalEquipment(condition: queryMedicalEquipment) {
    try {
      const response: AxiosResponse = await axios.put(
        `${this.baseUrl}/delete?id=${condition.id}`,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
    }
  }

  async updateMedicalEquip(
    condition: queryMedicalEquipment,
    info: updateMedicalEquip
  ) {
    try {
      const response: AxiosResponse = await axios.put(
        `${this.baseUrl}/update?id=${condition.id}`,
        info,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      return { error: data.error, message: data.message };
    } catch (error: any) {
      console.log("Error updating medical: ", error.response.data);
      return error.response.data;
    }
  }
}

export { Patient, Staff, Authenticate, MedicalManage, medicalEquipment };
