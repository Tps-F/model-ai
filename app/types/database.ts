export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      models: {
        Row: {
          content: string
          created_at: string
          id: string
          image_url: string
          model_url: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          image_url: string
          model_url?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          image_url?: string
          model_url?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "models_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string
          created_at: string
          full_name: string | null
          id: string
          name: string
          role: string
        }
        Insert: {
          avatar_url: string
          created_at?: string
          full_name?: string | null
          id: string
          name: string
          role?: string
        }
        Update: {
          avatar_url?: string
          created_at?: string
          full_name?: string | null
          id?: string
          name?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
