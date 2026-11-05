import { supabase } from './lib/supabase.js';

export function signUp(email, password) {
  return supabase.auth.signUp({ email, password });
}

export function signIn(email, password) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function loadMyProfile() {
  const { data } = await supabase.auth.getUser();
  return supabase.from('profiles').select('id, display_name').eq('user_id', data.user.id).single();
}
